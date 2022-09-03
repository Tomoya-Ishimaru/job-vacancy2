<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contacts;
use App\Services\ImageService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $works = Works::select('id', 'content', 'min_wage', 'max_wage','language','url','image_name')->get();
        // dd($works);

        return Inertia::render('Dashboard', [
            // 'works' => Works::select('id','content', 'min_wage', 'max_wage','language','url','image_name')
            // ->leftJoin('companies', 'works.company_id', '=', 'companies.id')
            // ->get()
            'works' =>DB::table('works')
            ->leftJoin('companies', 'works.company_id', '=', 'companies.id')
            ->select('works.id','content', 'min_wage', 'max_wage','language','url','image_name','companies.name as company_name')
            ->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Company/Setting');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userId =  Auth::id();
        Contacts::create([
            'company_id' => $companyId,
            'min_wage' => $request->minWage,
            'max_wage' => $request->maxWage,
            'content' => $request->contents,
            'language' => $request->language,
            'url' => $request->url,
            'image_name' => $fileNameToStore,
        ]);
        return to_route('company.works.create')
        ->with([
            'message' => '登録しました。'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
