import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";

export async function POST(req) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201});
}