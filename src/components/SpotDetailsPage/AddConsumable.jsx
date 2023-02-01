import { useState, useEffect } from "react";
import axios from "axios";

function AddConsumable(props) {
  const { spotId, getSpot } = props;
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const ownerId = spotId;


  useEffect(() => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dya5f34qe",
        uploadPreset: "uw_test",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage(result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newConsumable = {
      name,
      tagline,
      price,
      rating,
      image,
      ownerId
    }

    if(image){
    axios
      .post(`${API_URL}/api/consumable`, newConsumable)
      .then(() => {
        setName("");
        setTagline("");
        setPrice("");
        setRating("");
        setImage("");
        getSpot()
  })
      .catch((err) => console.log(err));
  }};

  return (
    <div className="AddConsumable">
      <h3>Add New Consumable</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}        />

        <label>Tagline:</label>
        <textarea
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}        />

        <label>Price:</label>
        <textarea
          type="number"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}        />

        <label>Rating:</label>
        <textarea
          type="number"
          name="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}        />

        <label>Image</label>
        <button id="upload_widget" className="cloudinary-button">
          Upload
        </button>
        <button type="submit">Add Consumable</button>
      </form>
    </div>
  );
}

export default AddConsumable;
