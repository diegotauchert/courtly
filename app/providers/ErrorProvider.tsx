"use client"

import { Button } from "@/components/ui/button";
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorProviderProps {
  children: ReactNode;
}

interface ErrorProviderState {
  hasError: boolean;
}

class ErrorProvider extends React.Component<ErrorProviderProps, ErrorProviderState> {
  constructor(props: ErrorProviderProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorProviderState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2>Oops, there is an error!</h2>
          <Button 
            type="button" 
            variant="secondary"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorProvider;
