import { getImageUrl } from "./utils.js";

// Here we get parameters of props from parent Profile component. person and size are two props with objects inside
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
