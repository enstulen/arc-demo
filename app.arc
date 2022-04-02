@app
arc-demo

@create
autocreate true

@aws
profile webstep
region us-west-1
architecture arm64
runtime typescript 

@plugins
architect/plugin-typescript


@http
get /
get /vehicles
get /vehicles/:regnumber/toll-passages


