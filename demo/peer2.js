const remoteConnection = new RTCPeerConnection()

remoteConnection.onicecandidate = e =>  {
    console.log(" NEW ice candidnat!! on localconnection reprinting SDP ")
    $('#answer').text(JSON.stringify(remoteConnection.localDescription))
}

 
remoteConnection.ondatachannel= e => {

      const receiveChannel = e.channel;
      receiveChannel.onmessage =e =>  $('#data_send').val(e.data)
      receiveChannel.onopen = e => $('#status').text('Open')
      receiveChannel.onclose =e => $('#status').text('Close')
      remoteConnection.channel = receiveChannel;

}

$('#connect').click(() => {
    let offer = $('#offer').val()
    offer = JSON.parse(offer)

    remoteConnection.setRemoteDescription(offer).then(a=>console.log("done"))
    
    //create answer
    remoteConnection.createAnswer().then(a => remoteConnection.setLocalDescription(a)).then(a=>
    $('#answer').text(JSON.stringify(remoteConnection.localDescription)))
})

$('#send').click(() => {
    let data = $('#data_send').val()
    remoteConnection.channel.send(data)
})

$('#data_send').bind('input propertychange', () => {
    let data = $('#data_send').val()
    remoteConnection.channel.send(data)
})
