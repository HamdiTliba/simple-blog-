import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import styles from "./adminUser.module.css";
import Image from "next/image";
const AdminUser = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          <div className={styles.details}>
            <Image
              src={user.img || "/noavatar.png"}
              width={50}
              height={50}
              alt={user.username}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" value={user.id} name="id" />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUser;
