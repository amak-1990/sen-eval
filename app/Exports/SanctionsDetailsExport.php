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

class SanctionsDetailsExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize, WithStyles, WithDefaultStyles
{
    private mixed $phase_id;
    private mixed $org_id;
    private mixed $type;


    public function __construct($phase_id, $org_id, $type)
    {
        $this->phase_id = $phase_id;
        $this->org_id = $org_id;
        $this->type = $type;
    }

    /**
     * @return Collection
     */
    public function collection(): Collection
    {
        return getSanctionsDetails($this->phase_id, $this->org_id, $this->type->sanction_type_id)->with('rating', 'rating.evaluated', 'rating.evaluator')->get();
    }

    public function headings(): array
    {
        return [
            'Sanction',
            'Évalué',
            'Évaluateur',
            'Demandée par',
            'Commentaire'
        ];
    }


    public function map($row): array
    {
        return [
            $this->type->sanction_type_name,
            $row->rating->evaluated->user_display_name,
            $row->rating->evaluator->user_display_name,
            'L\'évaluateur',
            $row->rating_sanction_comment
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
