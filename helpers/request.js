class Request {
    constructor(data) {
        this.requestData = (data.toString()).split('\r\n');
        this.method = this.getMethod();
        this.path = this.getPath();
        this.endPoint = this.path.split('/')[1];
        
        try{
            this.body = JSON.parse(this.getBody());
        } catch (err) {
            this.body = {}
        }
        
        this.query = this.path.split('/')[2] || {};
    }

    getMethod() {
        return ((this.requestData[0]).split(' '))[0];
    }

    getPath() {
        return ((this.requestData[0]).split(' '))[1];
    }

    getBody() {
        return ((this.requestData[(this.requestData).length - 1]));
    }
}

module.exports = Request;