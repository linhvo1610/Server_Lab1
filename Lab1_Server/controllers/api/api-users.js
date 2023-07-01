const MyModel = require('../../models/users.model');
exports.listUsers = async (req, res, next) => {
    let dataR = {
        status: 1,
        msg: "ok"
    }

    let dieu_kien =null;
    if(typeof(req.query.username)!='undefined'){
        let username =req.query.username;
        dieu_kien={username:username};
        console.log(dieu_kien);
    }
    //code xử lý lấy danh sách
    let list = []
    try {
        list = await MyModel.userModel.find(dieu_kien);
        dataR.data = list;
    }
    catch (err) {
        dataR.msg = err.message;
    }

    //trả về client
    res.json(dataR);
    console.log(dataR);
}
exports.addUsers =async (req, res, next) => {
    let dataR = {
        status: 1,
        msg: "ok"
    }
    if(req.method =='POST'){
        // xử lý ghi CSDL ở đây
        // kiểm tra hợp lệ dữ liệu ở chỗ này.


        // tạo đối tượng model 
        let objUser = new MyModel.userModel();
        
        objUser.username = req.body.username;
        objUser.password=req.body.password;
        objUser.image = req.body.image
        
        try{
            let dataR = await objUser.save();
            
            console.log(dataR);

            console.log("Đã ghi thành công");
           
        }catch(err){
            console.log(err);
            dataR.msg = err.message;
        }
    }
}
exports.deleteUser = async (req,res,next)=>{
    let dataR = {
        status: 1,
        msg: "ok"
    }
    let objUser = await MyModel.userModel.findById(  req.params.iduser  );
    console.log( objUser);
        
        try{
             
            // update dữ liệu
            // await myModel.spModel.updateOne( {_id:  req.params.idsp},   objSP );
             await MyModel.userModel.findByIdAndDelete({_id:req.params.iduser});

            console.log("Đã xóa thành công");
        }catch(err){
            console.log(err);
            msg ='Lỗi '+ err.message;

        }
 
}
exports.Updateuser =async (req, res, next) => {
    let dataR = {
        status: 1,
        msg: "ok"
    }
    if(req.method =='PUT'){

    
        try{
            await MyModel.userModel.updateOne({_id:req.params.iduser},{$set: {username:  req.body.username, password:  req.body.password,image: req.body.image}});
            console.log(dataR);

            console.log("Đã cập nhật thành công");
           
        }catch(err){
            console.log(err);
            dataR.msg = err.message;
        }
 
    }

    //code xử lý add


    //trả về client
    res.json(dataR)

}