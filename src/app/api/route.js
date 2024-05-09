import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { v4 } from "uuid";

export async function GET(request) {
    const token = request.cookies.get('token')
    console.log('sever return');
    return Response.json({ msg: 'hello' })
}

export async function POST(request) {

    const blogData = await request.formData()

    const title = blogData.get('title')
    const desc = blogData.get('desc')
    const previewDesc = blogData.get('previewDesc')
    const tags = blogData.get('tags')
    const date = blogData.get('date')
    const image = blogData.get('image')
    const author = blogData.get('author')


    const imgExtension = image.name.split('.').pop()
    const imageId = v4()
    const tagsData = `{"${tags.replace(',','","')}"}`
    // ['a','b','c']
    // ["'a'","'b'","'c'"]
    let blob = ''

    try {
        blob = await put(`${imageId}.${imgExtension}`, image, {access: 'public'})
    } catch (error) {
        console.log(error.msg);
        console.log(error);
    }
    if(blob){
        try {
            await sql`INSERT INTO blogs (title, description, tags, publisheddate, image, prevdescription, author) VALUES (${title},${desc},${tagsData},${date},${blob.url},${previewDesc},${author})`;
            console.log('Data pushed successfully:');
            console.log({title,desc,tagsData,date,blob: blob.url, previewDesc});
            return Response.json({title,desc,tagsData,date,blob: blob.url, previewDesc})

        } catch (error) {
            console.log(error.msg);
            console.log(error);
            return Response.json({ msg: 'Error' })
        }
    }

}
