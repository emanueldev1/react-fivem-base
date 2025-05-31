fx_version "cerulean"

description "Basic Fivem Script using Lua and React for UI"
author "emanueldev1"
version '1.0.0'
repository 'https://github.com/emanueldev1/react-fivem-base'

lua54 'yes'

games {
    "gta5",
    "rdr3"
}

ui_page 'web/build/index.html'

shared_script "@ox_lib/init.lua"
client_script "client/**/*"
server_script "server/**/*"

files {
    'web/build/index.html',
    'web/build/**/*',
}
