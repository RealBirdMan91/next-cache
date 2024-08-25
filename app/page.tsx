import InvoiceForm from "@/components/InvoiceForm";
import InvoicesList from "@/components/InvoicesList";
import PostsForm from "@/components/PostsForm";
import PostsList from "@/components/PostsList";
import { fetchLatestInvoices, fetchLatestPosts } from "@/libs/data";

async function Home() {
  const posts = await fetchLatestPosts();
  const invoices = await fetchLatestInvoices();

  return (
    <div>
      <h1 className="text-3xl">HOME</h1>
      <div className="flex gap-4">
        <div>
          <InvoicesList invoices={invoices} />
          <InvoiceForm />
        </div>
        <div>
          <PostsList posts={posts} />
          <PostsForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
