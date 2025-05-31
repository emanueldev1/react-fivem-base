local function toggleNuiFrame(shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
    toggleNuiFrame(true)
    lib.print.debug('Show NUI frame')
end, false)

RegisterNUICallback('hideFrame', function(_, cb)
    toggleNuiFrame(false)
    lib.print.debug('Hide NUI frame')
    cb({})
end)

RegisterNUICallback('getClientData', function(data, cb)
    lib.print.debug('Data sent by React', json.encode(data))

    -- Lets send back client coords to the React frame for use
    local curCoords = GetEntityCoords(PlayerPedId())

    local retData <const> = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
    cb(retData)
end)
