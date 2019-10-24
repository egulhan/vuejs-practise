class Status{
    static all(){
        return axios.get('/statuses');
    }

    static add(message){
        return axios.post('/statuses',{
            message:message
        });
    }
}

export default Status;
