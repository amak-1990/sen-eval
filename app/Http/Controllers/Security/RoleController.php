<?php

namespace App\Http\Controllers\Security;

use App\Http\Controllers\Controller;
use App\Http\Requests\Utilities\SearchRequest;
use App\Models\Role;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Searchable\ModelSearchAspect;
use Spatie\Searchable\Search;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return Inertia::render('Security/Roles/RolesList', [
                'roles' => Role::paginate(10)
            ]);
        }catch (Exception) {
            alert_error('Resource Introuvable.');
            return redirect()->back();
        }
    }

//    /**
//     * Show the form for creating a new resource.
//     */
//    public function create()
//    {
//        return Inertia::render('Settings/Skill/SaveSkill',[
//            'types' => SkillType::all()
//        ]);
//    }

//    /**
//     * Store a newly created resource in storage.
//     */
//    public function store(SaveSkillRequest $request)
//    {
//        try {
//            Skill::create($request->validated());
//            alert_success('Compétence crée avec succès.');
//        } catch (Exception) {
//            alert_error('Erreur lors de la création de cette compétence.');
//        } finally {
//            return redirect()->route('skills.create');
//        }
//    }

//    /**
//     * Show the form for editing the specified resource.
//     */
//    public function edit(string $id)
//    {
//        return Inertia::render('Settings/Skill/SaveSkill', [
//            'skill' => Skill::with('type')->findOrFail($id),
//            'types' => SkillType::all()
//        ]);
//    }
//
//    /**
//     * Update the specified resource in storage.
//     */
//    public function update(SaveSkillRequest $request, string $id)
//    {
//        try {
//            $skill = Skill::findOrFail($id);
//            $skill->update($request->validated());
//            alert_success('Compétence modifié avec succès.');
//        } catch (Exception) {
//            alert_error('Erreur lors de la modification de cette compétence.');
//        } finally {
//            return redirect()->route('skills.edit', ['skill' => $id]);
//        }
//    }
//
//    /**
//     * Remove the specified resource from storage.
//     */
//    public function destroy(string $id)
//    {
//        try {
//            Skill::findOrFail(intval($id))->delete();
//            alert_success('Compétence supprimé avec succès.');
//        } catch (Exception) {
//            alert_error('Erreur lors de la suppression de cette compétence.');
//        } finally {
//            redirect()->route('skills.index');
//        }
//    }
//

    public function search(SearchRequest $request)
    {
        try {
            $data = $request->validated();
            $searchResults = (new Search())
                ->registerModel(Role::class, function  (ModelSearchAspect $aspect) use($data) {
                    foreach ($data['fields'] as $field) {
                        $aspect->addSearchableAttribute($field);
                    }
                })
                ->search($data['keyword']);
            $result = [];
            foreach ($searchResults as $sr) {
                $result[] = $sr->searchable;
            }
            return response()->json($result);
        } catch (Exception) {
            return response()->json();
        }
    }
}
