<?php namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    private $repository;
    public function __construct(Todo $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        return response()->json($this->repository->get(), 200);
    }

    public function store(Request $request)
    {
        $todo = $this->repository->create($request->only(['description', 'done']));
        return response()->json($todo, 200);
    }

    public function show(Request $request, $id)
    {
        $todo = $this->repository->find($id);
        return response()->json($todo, 200);
    }

    public function update(Request $request, $id)
    {
        $todo = $this->repository->find($id);
        $todo->fill($request->only(['description', 'done']));
        $todo->save();
        return response()->json($todo, 200);
    }
}
