<?php

namespace App\Oracle;

use App\Models\Organisation;
use Illuminate\Support\Facades\DB;

class ImportOrgsFromOracle
{
    public function __invoke(): void
    {

        $orgs = array();
        $oracleOrgs = DB::connection('oracle')->select(\File::get(app_path() . '/Oracle/GetOrganisations.sql'));
        foreach ($oracleOrgs as $oracleOrg) {
            if (!str_starts_with($oracleOrg->libelle, 'EM') && preg_match('/[A-Za-z].*[0-9]/', $oracleOrg->centre_resp)) {
                $orgs[] = Organisation::updateOrCreate(['org_id' => $oracleOrg->id], [
                    'org_name' => $oracleOrg->libelle,
                    'org_responsibility_center' => $oracleOrg->centre_resp,
                    'org_type' => $oracleOrg->type,
                ]);
            }
        }

        $rcAsIndex = array();
        foreach ($orgs as $org) $rcAsIndex[$org->org_responsibility_center] = $org->org_id;
        foreach ($orgs as $org)
            try {
                if ($org->updated_by !== null) continue;
                if (str_starts_with($org->org_responsibility_center, 'RH')) {
                    $org->update(['parent_id' => $rcAsIndex['CH101']]);
                    continue;
                }
                if (substr($org->org_responsibility_center, 2) === '001') {
                    $org->update(['parent_id' => 24]);
                    continue;
                }
                $cr = substr($org->org_responsibility_center, 0, 2) . '001';
                if (!isset($rcAsIndex[$cr]) || $org->org_responsibility_center === $cr) $cr = substr($org->org_responsibility_center, 0, 2) . '000';
                if (!isset($rcAsIndex[$cr]) || $org->org_responsibility_center === $cr) $cr = 'DG001';
                $org->update([
                    'parent_id' => $rcAsIndex[$cr]
                ]);
            } catch (\Exception) {
                continue;
            }

    }

}
