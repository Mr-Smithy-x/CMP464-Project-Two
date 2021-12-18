# Labocina Latina VOD 

Create `.env.local` file in the `root` of the project folder
>
>  ```
> $ touch .env.local
> ```

 `REACT_APP_ZYPE_PLAYER_KEY` needs to be set in the `.env.local`
> ```
> $ npm install
> $ npm start
> ```

 This project utilizes ReactJS, React-Router and React-Bootstrap.
 For the api, I've created a backend api service in laravel/lumen 
 that uses the zype api to fetch and receive videos.

 React Events are uses to propagate the selected video up to the main VideoContainer 
 to be watched and display information about the video
