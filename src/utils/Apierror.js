class Apierror extends Error
{
    constructor(statuscode,message="something wentwrong")
    {
        super(message);
        this.message=message,
        this.statuscode=statuscode,
        this.data=null,
        this.success=false
    }
}
export {Apierror};