<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use App\Models\User;
use Database\Seeders\Phase\PeriodTypeSeeder;
use Database\Seeders\Phase\PhaseSeeder;
use Database\Seeders\Settings\ClaimTypeSeeder;
use Database\Seeders\Settings\MobilityTypeSeeder;
use Database\Seeders\Settings\PromotionTypeSeeder;
use Database\Seeders\Settings\SanctionTypeSeeder;
use Database\Seeders\Settings\SkillSeeder;
use Database\Seeders\Settings\SkillTypeSeeder;
use Database\Seeders\Settings\TrainingTypeSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            GroupSeeder::class,
            RoleSeeder::class,
            ClaimTypeSeeder::class,
            MobilityTypeSeeder::class,
            SanctionTypeSeeder::class,
            SkillTypeSeeder::class,
            SkillSeeder::class,
            TrainingTypeSeeder::class,
            PeriodTypeSeeder::class,
            PhaseSeeder::class,
            PromotionTypeSeeder::class,
        ]);

        User::factory()->create([
            'user_display_name' => 'Root',
            'email' => 'root@example.com',
            'user_login' => 'root',
            'user_matricule' => 'root@seneval',
            'role_id' => Role::ROOT
        ]);
//
//         User::factory()->create([
//             'user_name' => 'User',
//             'email' => 'st_massamba.niang@senelec.sn',
//             'user_login' => 'st_massamba.niang',
//             'role_id' => Role::USER
//         ]);
    }
}
