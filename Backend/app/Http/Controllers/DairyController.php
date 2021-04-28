<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class DairyController extends Controller
{
    public function index()
    {
            $events = Event::all();
            return response([
                'event' => $events
            ]);
    }

    function add(Request $req)
    {
            $event = new Event();

            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;
            $event->save();
            return response([
                'event' => $event
            ]);
    }

    public function edit(Request $req,$id)
    {
            $event = Event::find($id);

            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;
            $event->save();
            return response([
                'event' => $event
            ]);
    }

    public function update(Request $req,$id)
    {
            $event = Event::find($id);
            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;
            $event->save();
            return response([
                'event' => $event
            ]);
    }



    public function delete($id)
    {
            $event = Event::find($id);
            $event->delete();
            return response([
                'message' => 'Event Deleted'
            ]);
    }
}
