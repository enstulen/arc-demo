@app
arc-demo

@create
autocreate true

@aws
profile webstep
region eu-west-1
architecture arm64
runtime typescript 

@plugins
architect/plugin-typescript


@http
get /
get /vehicles
get /vehicles/:regnumber/toll-passages

@static
folder ../frontend/build
fingerprint true


