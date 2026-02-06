// For the following routes: "* (Default)" on www.hadleyso.com


async function handler(event) {
    // NOTE: This example function is for a viewer request event trigger. 
    // Choose viewer request for event trigger when you associate this function with a distribution. 
    const request = event.request;

    // Handle navigation
    if (request.uri.endsWith("/")) {
        request['uri'] = request.uri + "index.html"
    } else if (request.uri.endsWith("/index.html")) {
        request['uri'] = request.uri.slice(0, -10); 
    }

    return request;

}
