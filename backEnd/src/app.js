import express from "express";
import cors from "cors";
import moviesRouter from "./routers/movies.route.js";
import seriesRouter from "./routers/series.route.js";
import discoverRouter from "./routers/discover.route.js";
import bannerRouter from "./routers/banner.route.js";
import commentRouter from "./routers/comment.route.js";
import userRouter from "./routers/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRouter);
app.use("/api/series", seriesRouter);
app.use("/api/discover", discoverRouter);
app.use("/api/banners", bannerRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", userRouter);

export default app;
