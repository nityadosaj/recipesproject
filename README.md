
# Recipe Finder

This project allows us to search any recipe in the world using API. This was a school project so some of the methods have not been implemented yet.
I am using bootstrap, scss, react-icons etc. Make sure to install these.


## API Reference

#### Get all items

```http
  GET /api/recipes/v2
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `api_id`  | `string` | **Required**. Your API Id  |
| `query `  | `string` | Query for searching        |

When you enter a name in the search bar, it sends it to query which then sends it to the api url for your result.



## Deployment

To deploy this project run

```bash
  npm run start
```
or you can use the netlify url:
```bash
    https://recipe-finder-nitya-dosaj.netlify.app
```





## Installation

Install my-project with npm

```bash
  npm install 
```
## Features

- Light/dark mode toggle
- Search options
- Recipe cards
- Nutrients List
- Ingredients List
- Scroll button to jump to the top of the page when to far down
- Next page (not yet implemented)
- Kitchen to store saved recipes (not yet implemented)


## Authors

- [@nityadosaj](https://www.github.com/nityadosaj)

