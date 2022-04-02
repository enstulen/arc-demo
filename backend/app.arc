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
get /vehicles/:regnumber/toll-passages
get /vehicles

post /toll-passages

@queues
add-toll-passage

@tables
tollPassages
  regnumber *String
  date **String

@static
folder ../frontend/build
fingerprint true

