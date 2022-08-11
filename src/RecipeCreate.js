import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  
  const [content, setContent] = useState({...initialFormState});

  //track the changes to the content field
  const handleChange = ({target}) => {
    const value = target.value;
    setContent({ ...content, [target.name]: value, });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
//     console.log("Submitted:", content);
    createRecipe(content);
    setContent({...initialFormState});
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={content.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleChange}
                value={content.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Photo"
                onChange={handleChange}
                value={content.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={handleChange}
                value={content.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                onChange={handleChange}
                value={content.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
