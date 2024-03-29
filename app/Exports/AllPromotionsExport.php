<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithDefaultStyles;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Style;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class AllPromotionsExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize, WithStyles, WithDefaultStyles
{
    private mixed $phase_id;
    private mixed $org_id;


    public function __construct($phase_id, $org_id)
    {
        $this->phase_id = $phase_id;
        $this->org_id = $org_id;
    }

    /**
     * @return Collection
     */
    public function collection(): Collection
    {
        return getAllPromotions($this->phase_id, $this->org_id)->with('rating', 'rating.evaluated', 'rating.evaluator', 'type')->get();
    }

    public function headings(): array
    {
        return [
            'Type',
            'Évalué',
            'Évaluateur',
            'Demandée par',
            'Éligibilité',
            'Proposition',
            'Commentaire'
        ];
    }


    public function map($row): array
    {
        return [
            $row->type->promotion_type_name,
            $row->rating->evaluated->user_display_name,
            $row->rating->evaluator->user_display_name,
            'L\'évaluateur',
            match ($row->evaluated_is_eligible) {
                0 => 'Non éligible',
                default => 'Éligible'
            },
            match ($row->is_proposed) {
                0 => 'Non Proposé',
                default => 'Proposé'
            },
            $row->rating_promotion_comment
        ];
    }

    public function styles(Worksheet $sheet): array
    {
        return [
            1 => ['font' => ['bold' => true, 'size' => 16]],
            'A' => ['font' => ['bold' => true, 'size' => 16]],
        ];
    }

    public function defaultStyles(Style $defaultStyle)
    {
        return $defaultStyle->getFont()->setSize(16);
    }
}
