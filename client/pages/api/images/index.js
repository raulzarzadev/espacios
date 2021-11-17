import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
})
export default async function images(req, res) {
  const {
    method,
    body: { title, images, origin }
  } = req

  if (method === 'POST') {
    Object.keys(images).forEach(async (image) => {
      const result = await cloudinary.v2.uploader.upload(images[image])
      console.log(`result`, result)
    })

    /* 
      //console.log("res", result);
      const newPhoto = new Photo({
        title,
        imageURL: result.url,
        public_id: result.public_id
      })
      await newPhoto.save()
      res.json({ message: 'uploaded', ok: true, image: newPhoto })
    } catch (err) {
      res.json({ message: 'uploaded fail', ok: false })
      console.log(err)
    } 
    
    */
  }
}
