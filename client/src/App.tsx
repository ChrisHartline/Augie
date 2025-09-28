import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SharedLayout from "@/components/shared-layout";
import NotFound from "@/pages/not-found";
import Chat from "@/pages/chat";
import CatholicOneSource from "@/pages/catholic-onesource";

function Router() {
  return (
    <SharedLayout>
      <Switch>
        <Route path="/" component={Chat} />
        <Route path="/onesource" component={CatholicOneSource} />
        <Route component={NotFound} />
      </Switch>
    </SharedLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
