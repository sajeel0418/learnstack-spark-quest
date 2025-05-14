
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  FileUp, 
  FileText, 
  DownloadCloud, 
  Copy, 
  Check, 
  Loader2,
  FileBadge
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) {
      return;
    }
    
    // Check file type
    const validTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or PowerPoint file.",
        variant: "destructive"
      });
      return;
    }
    
    // Check file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (selectedFile.size > maxSize) {
      toast({
        title: "File too large",
        description: "File size must be less than 10MB.",
        variant: "destructive"
      });
      return;
    }
    
    setFile(selectedFile);
    setSummary("");
  };

  const simulateUploadProgress = () => {
    setIsUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive"
      });
      return;
    }
    
    simulateUploadProgress();
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(true);
      
      // Simulate AI summarization
      setTimeout(() => {
        const mockSummaries = {
          pdf: "This document covers the fundamental principles of machine learning, including supervised and unsupervised learning techniques. Key topics discussed include regression, classification, clustering, and neural networks. The material emphasizes practical applications in data science and provides code examples in Python using popular libraries such as scikit-learn and TensorFlow. The conclusion highlights emerging trends in deep learning and reinforcement learning.",
          ppt: "This presentation outlines the company's marketing strategy for Q3 2023. It identifies the target demographic as young professionals aged 25-34 and recommends focusing on social media platforms like Instagram and TikTok. The proposed budget allocation suggests 40% for digital marketing, 30% for influencer partnerships, 20% for content creation, and 10% for analytics. Performance will be measured using customer acquisition cost, conversion rates, and social engagement metrics."
        };
        
        const isPDF = file.name.toLowerCase().endsWith('.pdf');
        setSummary(isPDF ? mockSummaries.pdf : mockSummaries.ppt);
        setIsProcessing(false);
        
        toast({
          title: "Summary generated!",
          description: "Your document has been processed successfully."
        });
      }, 3000);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Card className="shadow-md border-learnstack-100">
      <CardHeader className="bg-learnstack-50 rounded-t-lg">
        <CardTitle className="text-lg flex items-center text-learnstack-800">
          <FileBadge className="mr-2 h-5 w-5 text-learnstack-600" />
          AI Document Summarizer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Upload your lecture PDF or presentation slides to get an AI-generated summary.
          </p>
        </div>

        {!file && !summary ? (
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.ppt,.pptx"
              onChange={handleFileChange}
            />
            <label 
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <FileUp className="h-10 w-10 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-900 mb-1">
                Click to upload
              </span>
              <span className="text-xs text-gray-500">
                PDF or PowerPoint (max 10MB)
              </span>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            {file && (
              <div className="bg-gray-50 p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-learnstack-600 mr-2" />
                  <div>
                    <p className="text-sm font-medium truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                
                {!summary && (
                  <Button 
                    onClick={handleUpload} 
                    disabled={isUploading || isProcessing}
                    size="sm"
                  >
                    {isUploading ? (
                      <>
                        <DownloadCloud className="mr-2 h-4 w-4" />
                        Uploading...
                      </>
                    ) : isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Generate Summary"
                    )}
                  </Button>
                )}
              </div>
            )}
            
            {isUploading && (
              <div className="space-y-1">
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-gray-500 text-right">
                  {progress}% complete
                </p>
              </div>
            )}
            
            {summary && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">AI-Generated Summary</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCopy}
                    className="h-8 px-2"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <Textarea 
                  value={summary} 
                  readOnly 
                  className="min-h-[150px]"
                />
                <div className="flex justify-end">
                  <input
                    type="file"
                    id="file-upload-new"
                    className="hidden"
                    accept=".pdf,.ppt,.pptx"
                    onChange={handleFileChange}
                  />
                  <label 
                    htmlFor="file-upload-new"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-learnstack-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-learnstack-700 focus:outline-none cursor-pointer"
                  >
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload Another File
                  </label>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default FileUploader;
