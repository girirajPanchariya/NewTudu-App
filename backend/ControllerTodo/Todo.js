import { TudoModel } from "../ModelTodo/Todo.js";
import PDFDocument from 'pdfkit'
import fs from 'fs'
import QRCode from 'qrcode'
export const createTudo = async(req,res)=>{
        try {
            const {title,subject,description}=req.body;

            if(!title || !subject || !description){
                return res.status(400).json({
                        message:"All files are required"
                })
            }
            const todo= new TudoModel({
                    title,
                    subject,
                    description
            })
            await todo.save()

            return res.status(200).json({
                todo
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    error:error
                })
                
        }
}

export const getAllTodo = async(req,res)=>{
        try {
                const AllTudo = await TudoModel.find({});
                if(!AllTudo){
                    return res.status(400).json({
                        message:"the are not create any tudo",
                    
                    })
                }
                return res.status(200).json({
                    message:"this the over Tudo",
                    AllTudo
                })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"this is the internal error",
                error:error
            })
                        
        }
}

export const getTudoById = async(req,res)=>{
        try {
                const {id} = req.params

                const readTudo = await TudoModel.findById(id)

                if(!readTudo){
                    return res.status(400).json({
                        message:"this id is not existing"
                    })
                }
                //   const doc = new PDFDocument({margin:50})
                    
                // //   doc.pipe(fs.createWriteStream('output.pdf'))
                
                // res.setHeader('Content-Type','application/pdf')
                // res.setHeader('Content-Disposition',`attachment; filename="tudo-${id}.pdf"`)

                //     doc.pipe(res)
                // doc.fontSize(25)
                //     doc.text(`Title: ${readTudo.title}`)
                //     doc.text(`subject: ${readTudo.subject}`)
                //     doc.text(`description: ${readTudo.description}`)

                    
                    
                    return res.status(200).json({
                            readTudo
                        })

                        
                        // const quData = `Title: ${readTudo.title}
                        // Subject: ${readTudo.title}
                        // Description: ${readTudo.description}`
                        // const qurImage  = await QRCode.toDataURL(quData)
                        // doc.image(qurImage, {
                        //     fit: [150, 150],
                        //     align: "center",
                        // });
                        // doc.end()


        } catch (error) {
            console.log(error);
            
            return res.status(500).json({
                message:"this is your readTudo error",
                error:error
            })           
        }
}

export const deleteTudo = async(req,res)=>{
        try {
            const {id} = req.params

            const deltedTudo = await TudoModel.findByIdAndDelete(id)

            if(!deltedTudo){
                return res.status(400).json({
                    message:"this tudo is not exiting"
                })
            }

          

            return res.status(200).json({
                message:`The given tudo is delted ${deltedTudo.title}`
            })
        } catch (error) {
              return res.status(500).json({
                message:"this is your readTudo error",
                error:error
            })
        }
}

export const updatetudo = async(req,res)=>{
        try {
            const {id} = req.params
                const {title,subject,description} = req.body

            const updateData = {title,subject,description}

            const upateTudo = await TudoModel.findByIdAndUpdate(id,updateData,{new:true})


            if(!upateTudo){
                return res.status(400).json({
                    message:"this tudo id not provide"
                })
            }

            return res.status(200).json({
                message:"this si tudo",
                upateTudo
            })

        } catch (error) {
            console.log(error);
            
              return res.status(500).json({
                message:"this is your readTudo error",
                error:error
            })
        }
}