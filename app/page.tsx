import PostPageWrapper from "@/components/PostPageWrapper";
import PostsForm from "@/components/PostsForm";
import PostsList from "@/components/PostsList";

import { Suspense } from "react";

async function Home() {
  return (
    <div>
      <h1 className="text-3xl">HOME</h1>
      <div className="flex gap-4">
        {/* <div>
          <InvoicesList invoices={invoices} />
          <InvoiceForm />
        </div> */}
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <PostPageWrapper />
          </Suspense>
          <PostsForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
