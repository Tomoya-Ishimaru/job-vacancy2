<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Works;
use App\Services\ImageService;
use Illuminate\Support\Facades\Auth;

class WorksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // phpinfo();
        // dd($request);
        $imageFiles = $request->file('image');
        // dd($imageFiles);
        $fileNameToStore = ImageService::upload($imageFiles, 'image'); 
        $companyId =  Auth::id();
        // dd($companyId);
        // phpinfo();

        Works::create([
            'company_id' => $companyId,
            'min_wage' => $request->minWage,
            'max_wage' => $request->maxWage,
            'content' => $request->contents,
            'language' => $request->language,
            'url' => $request->url,
            'image_name' => $fileNameToStore,
        ]);

        // return Inertia::render('Company/Setting')
        return to_route('company.works.create')
        ->with([
            'message' => '登録しました。',
            // 'status' => 'success'
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
