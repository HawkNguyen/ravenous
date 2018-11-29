const apikey = "xow007-SJQmile_z3NcNGti0XMdOmFv01WEq1oF3Pmp5YE1THtJMeA5-Al0oc6Gcm-ddSfo5a1SnI90Sk8zh49jI_nz14hQrzDKiiNzecbV9-K96zNZ3ZdovJ2n_W3Yx";
const apiPath = "https://api.yelp.com/v3/businesses/search?"
const Yelp = {
  search(term,location,sortBy){
      const url = `${apiPath}term=${term}&location=${location}&sort_by=${sortBy}`
      return fetch(`https://cors-anywhere.herokuapp.com/${url}`,
        {
          headers: {
            Authorization:`Bearer ${apikey}`
          }
        }).then((response)=>{return response.json();}).then(jsonResponse=>{
          if(jsonResponse.businesses){
            return jsonResponse.businesses.map(element => {
              return {
                id: element["id"],
                imageSrc: element["image_url"],
                name: element["name"],
                address: element["location"]["address1"],
                city: element["location"]["city"],
                state: element["location"]["state"],
                zipCode: element["location"]["zip_code"],
                category: element["categories"][0]["title"],
                rating: element["rating"],
                reviewCount: element["review_count"]
              }
            });
          }
        })


  }
}
export default Yelp;
