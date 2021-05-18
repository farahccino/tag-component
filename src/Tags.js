import styled from 'styled-components';
import { useState } from 'react';

export default function Tags({ tags, onUpdateTags, onDeleteTag }) {
  const [tag, setTag] = useState('');

  function handleChange(event) {
    setTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tag);
      setTag(''); 
    }
    else if (tag.length === 0 && event.key === 'Backspace') {
        onDeleteTag(tags[tags.length - 1])
    }
  }

  return (
    <Tag>
      <label htmlFor="tag">Player Skills</label>
      
      <TagCloud>
        {tags.map((tag, index) => (
          <span key={index + tag}>{tag}
          <Button onClick={() => onDeleteTag(tag)}>X</Button> 
          </span>
          
        ))}
        <input
        type="text"
        name="tag"
        value={tag}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      </TagCloud>
    </Tag>
  );
}


const Button = styled.button`
border: none;
background: none;
color: hotpink;
cursor: pointer;
`

const Tag = styled.section`
  display: inline-flex;
  gap: 0.4rem;
  font-family: sans-serif;

  input {
    padding: 0.5rem;
  }

  span {
    margin: 0.2rem;
    background: limegreen;
    color: ivory;
    padding: 0.3rem;
    border-radius: 0.3rem;
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

