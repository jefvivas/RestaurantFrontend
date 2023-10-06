import { useState, useEffect } from "react";
import {
  ModalOverlay,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  RadioGroup,
  RadioButton,
  CategorySelect,
} from "./styles";

const EditProductModal = ({ product, onSave, onClose }: any) => {
  const [formData, setFormData] = useState(product);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e: any) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleRadioChange = (e: any) => {
    setFormData({ ...formData, isAvailable: e.target.value === "true" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <ModalOverlay>
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
        <Button type="submit">Save Changes</Button>
      </Form>
    </ModalOverlay>
  );
};

export default EditProductModal;
