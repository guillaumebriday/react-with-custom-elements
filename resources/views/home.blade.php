@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    <div id="post-comments" data-post="1" data-nested="false"></div>

                    <post-comments post="2" nested="true"></post-comments>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
