import { useState } from "react";
import { createProduct } from "../../Services/Product";
import ResponseModal from "../../Components/Modals/ResponseModal/Page";
import {
  Button,
  CategorySelect,
  CreateProductContainer,
  Form,
  FormGroup,
  Input,
  Label,
  RadioButton,
  RadioGroup,
  TextArea,
} from "../Styles";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Drink",
    isAvailable: true,
  });

  const [showModalMessage, setShowModalMessage] = useState(false);

  const [apiResponse, setApiResponse] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e: any) => {
    const { value } = e.target;
    setFormData({ ...formData, category: value });
  };

  const handlePriceBlur = (e: any) => {
    const formattedPrice = parseFloat(e.target.value).toFixed(2);
    setFormData({ ...formData, price: formattedPrice });
  };

  const handleRadioChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value === "true" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const numericPrice = parseFloat(formData.price);
    try {
      const response = await createProduct({
        ...formData,
        price: numericPrice,
      });
      setApiResponse(response);
    } catch (error: any) {
      setApiResponse(error.message);
    }
    setShowModalMessage(true);
  };

  return (
    <CreateProductContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">Price</Label>
          <Input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            onBlur={handlePriceBlur}
            inputMode="numeric"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <CategorySelect
            id="category"
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
          >
            <option value="Drink">Drink</option>
            <option value="Food">Food</option>
          </CategorySelect>
        </FormGroup>
        <FormGroup>
          <Label>Available</Label>
          <RadioGroup>
            <RadioButton>
              <input
                type="radio"
                id="isActiveTrue"
                name="isAvailable"
                value="true"
                checked={formData.isAvailable}
                onChange={handleRadioChange}
              />
              <span>Yes</span>
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                id="isActiveFalse"
                name="isAvailable"
                value="false"
                checked={!formData.isAvailable}
                onChange={handleRadioChange}
              />
              <span>No</span>
            </RadioButton>
          </RadioGroup>
        </FormGroup>
        <Button type="submit">Create Product</Button>
      </Form>
      {showModalMessage && (
        <ResponseModal
          onClose={() => setShowModalMessage(false)}
          message={apiResponse}
        />
      )}
    </CreateProductContainer>
  );
};

export default CreateProduct;
