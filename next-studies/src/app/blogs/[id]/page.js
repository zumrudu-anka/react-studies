import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default async function Blog({ params }) {
    const id = (await params).id;

    const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
    const blog = await response.json();
    return (
        <Grid container>
            <Card sx={{ display: "flex" }}>
                <CardMedia component="img" sx={{ width: "45%" }} image={`/img/${blog.img}`} alt="" />
                <Box>
                    <CardContent>
                        <Typography component="div" variant="h6">
                            {blog.name}
                        </Typography>
                        <Typography component="div" variant="subtitle1">
                            {blog.description}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
}
