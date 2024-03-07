import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {
  return (
    <form action={addUser} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">is admin?</option>
        <option value="true">yes</option>
        <option value="false">no</option>
      </select>
      <button>Add User</button>
    </form>
  );
};

export default AdminUserForm;
