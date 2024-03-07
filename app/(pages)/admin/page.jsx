import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPost from "@/componets/admin/adminPost/adminPost";
import AdminPostForm from "@/componets/admin/adminPostForm/adminPostForm";
import AdminUser from "@/componets/admin/adminUser/adminUser";
import AdminUserForm from "@/componets/admin/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();
  console.log(session.id);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>...Loading </div>}>
            <AdminPost />
          </Suspense>
        </div>
        <div className={styles.forms}>
          <AdminPostForm userId={session.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>...Loading</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className={styles.forms}>
          <AdminUserForm  />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
