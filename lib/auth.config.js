export const config = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.isAdmin = user.isAdmin;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.username = token.username;
        session.isAdmin = token.isAdmin;
      }

      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isBlogPanel = request.nextUrl?.pathname.startsWith("/blog");
      const isLoginPanel = request.nextUrl?.pathname.startsWith("/login");

      if ((isAdminPanel && !auth?.isAdmin) || undefined) {
        return false;
      }

      if (isBlogPanel && !user) {
        return false;
      }
      if (isLoginPanel && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
