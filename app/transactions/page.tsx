import { db } from "../_lib/prisma";
import { transactionsColumns } from "./_columns";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import Navbar from "../_components/navbar";

const TransactionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        {/*Titulo e botão*/}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionsColumns} data={transactions} />
      </div>
    </>
  );
};
export default TransactionPage;
