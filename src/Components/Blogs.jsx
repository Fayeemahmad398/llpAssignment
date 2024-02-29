/* eslint-disable react/jsx-key */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../style/blog.css"
import reainforcImg from "../assets/reinforceimg.jpg"
import dbimg from "../assets/dbimg.jpg"
import tranferImg from "../assets/tranferlearnimg.jpeg"
import { Link } from '@mui/material';




function Blogs() {
    const blogs = [
        {
            title: "Speaking SQL: Turning Natural Language into Database Dialogues",
            description: "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
            img: dbimg,
            redirectLink: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html"
            , ishalf: true
        },
        {
            title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
            description: "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
            img: reainforcImg,
            redirectLink: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html"
            , ishalf: true

        },
        {
            title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
            description: "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
            img: tranferImg,
            redirectLink: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html"
            , ishalf: true

        },
    ];





    return (
        <div className='blogs'>
            <h3 className='offers-services'>Explore and enjoy the blogs written by
                our passionate techies.</h3>
            <div className='card-container'>
                {
                    blogs.map((blog) =>
                        <Card sx={{ maxWidth: 345, borderRadius: "10px" }} className="card-each">
                            <CardMedia
                                sx={{ height: 140, overflow: "hidden" }}
                                image={blog.img}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="45"
                                    component="div" sx={{ style: { color: "red" } }}>
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {blog.ishalf ?
                                        blog.description.slice(0,
                                            Math.floor(blog.description.length / 2)) : blog.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Link href={blog.redirectLink}>Learn More</Link>
                            </CardActions>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}

export default Blogs
