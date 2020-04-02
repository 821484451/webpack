function Venus (){
    this.http = function(options){
        return new Promise((resolve, reject) => {
            let method = options.method || "GET",
                params = options.params, // GEt请求传递的数据
                data = options.data,
                url = options.url,
                async = options.async || true,
                success = options.success,
                headers = options.headers;

            let xhr;
            if (window.XMLHttpRequest){
                xhr =  new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            };
            xhr.open(method, url, async);

            xhr.onreadystatechange = function() {
                if (xhr.status === 200 && xhr.readyState === 4 ) {
                    resolve(xhr.responseText)
                }else if(xhr.status != 200 && xhr.readyState === 4 ) {
                    reject(xhr.responseText);
                }
            };
            console.log( (params ? '?' + Object.keys(params).map(key => (key + '=' + params[key])).join('&'): ''));
            method === "GET" 
            ? xhr.send(url + (params ? '?' + Object.keys(params).map(key => (key + '=' + params[key])).join('&'): '')) 
            : xhr.send(url, data);
        });
        
    }
}
export default Venus