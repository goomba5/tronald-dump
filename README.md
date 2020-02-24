# Tronald Dump Site

All credit for this being possible goes to matchilling for providing such an amazing API to utilize. Much love and respect.

Here are both the GitHub repo and documentation for the API in case you would like to use it as well:  

1. GitHub Repository: [Tronald Dump Repo](https://github.com/tronalddump-io/tronald-app)  
2. Documentation: [Tronald Dump Documentation](https://docs.tronalddump.io)

If you want to try it out and make your own requests, then check out the example below where the request is made in React with hooks. Here, it shows how to retrieve a random quote from the API:

```JavaScript
   const [tronald, setTronald] = useState();

   const fetchData = () => {
       const apiURL = "https://api.tronalddump.io/random/quote";
       const response = fetch(apiURL);

       response
       .json()
       .then((data) =>{
            setTronald(data.value)
            console.log(data.value)
        })
   }
```

The code written here will retrieve the actual quote included in the JSON response from the API so you can display it in the console of your browser. If you are curious about what other endpoints are available or you want to see what else is included in the response, then definitely look at the API documentation in the link above.

**Important Note**  
When making requests to the API, always precede the endpoint (whether it's /quote or /meme) with "https://api.tronalddump.io/". The documentation does not explicitly state this, so, for clarity, make sure you include this base URL when making your requests. :smile:

I might tweak some things about this site in the future for practice puruposes. And while this site has the potential to make you sad and depressed, I truly hope it also offers some form of comical relief. Have a good day!
