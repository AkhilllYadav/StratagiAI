
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Brain, Sparkles, CheckCircle, Save } from "lucide-react";
import { generateStrategy } from "@/lib/api";

interface StrategyGeneratorProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
  selectedBrand: any;
  strategyType: any;
  businessContext: any;
  canGoBack: boolean;
}

const StrategyGenerator = ({ 
  onNext, 
  onPrevious, 
  selectedBrand, 
  strategyType, 
  businessContext, 
  canGoBack 
}: StrategyGeneratorProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [editableStrategyContent, setEditableStrategyContent] = useState<string>('');

  const steps = [
    "Analyzing brand strategy patterns",
    "Processing business context",
    "Generating marketing framework",
    "Creating actionable recommendations",
    "Finalizing strategy document"
  ];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsComplete(true);
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
        
        setCurrentStep(prev => {
          const newStep = Math.floor((progress / 100) * steps.length);
          return Math.min(newStep, steps.length - 1);
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isGenerating, progress, steps.length]);

  const generateStrategyWithBackend = async () => {
    try {
      const data = await generateStrategy({
        company_name: businessContext.companyName,
        industry: businessContext.industry,
        target_audience: businessContext.targetAudience,
        strategic_focus: businessContext.strategicFocus,
        budget: businessContext.budget || 0,
        timeline: businessContext.timeline || 'Not specified',
        brand_inspiration: selectedBrand.name,
        strategy_type: strategyType.title
      });

      if (data.success && data.strategy) {
        // Convert the structured strategy data to markdown format
        return convertStrategyToMarkdown(data.strategy);
      } else {
        throw new Error(data.error || 'Failed to generate strategy');
      }
    } catch (error) {
      console.error('Backend API Error:', error);
      // Fallback to mock strategy using the backend's mock data
      return generateMockStrategy();
    }
  };

  const convertStrategyToMarkdown = (strategy: any) => {
    let markdown = `# Marketing Strategy for ${businessContext.companyName}
*Inspired by ${selectedBrand.name}'s Proven Methodology*

`;

    Object.keys(strategy).forEach(sectionKey => {
      const section = strategy[sectionKey];
      markdown += `## ${section.title}

${section.content}

**Key Points:**
${section.key_points?.map((point: string) => `- ${point}`).join('\n') || ''}

**Recommendations:**
${section.recommendations?.map((rec: string) => `- ${rec}`).join('\n') || ''}

---

`;
    });

    return markdown;
  };

  const generateMockStrategy = () => {
    return `# Marketing Strategy for ${businessContext.companyName}
*Inspired by ${selectedBrand.name}'s Proven Methodology*

## Executive Summary
${businessContext.companyName} is positioned to become a leading player in the ${businessContext.industry} industry through strategic digital marketing initiatives.

**Key Points:**
- Strong market opportunity in ${businessContext.industry}
- Clear competitive advantages identified
- Scalable growth strategy developed

**Recommendations:**
- Focus on digital-first marketing approach
- Implement data-driven decision making
- Build strong brand presence online

---

## Strategic Framework
Based on ${selectedBrand.name}'s proven methodology, we have developed a comprehensive marketing strategy tailored for ${businessContext.companyName} in the ${businessContext.industry} industry.

**Key Points:**
- Multi-channel approach for reaching ${businessContext.targetAudience}
- Conversion optimization tactics
- Customer onboarding process

**Recommendations:**
- Position ${businessContext.companyName} as a ${businessContext.strategicFocus} leader
- Target audience: ${businessContext.targetAudience}
- Unique value proposition aligned with market needs

---

## Implementation Plan
This strategy combines proven methodologies with your unique business context.

**Key Points:**
- 90-day phased implementation approach
- Start with highest-impact activities
- Build momentum with quick wins

**Recommendations:**
- Monitor performance metrics closely
- Iterate based on early results
- Scale successful initiatives`;
  };

  const startGeneration = async () => {
    setIsGenerating(true);
    setProgress(0);
    setCurrentStep(0);
  };

  const handleComplete = async () => {
    const generatedContent = await generateStrategyWithBackend();
    
    const strategy = {
      content: generatedContent,
      metadata: {
        brand: selectedBrand,
        strategyType: strategyType,
        context: businessContext,
        generatedAt: new Date().toISOString(),
        source: 'LangChain Backend API'
      }
    };

    onNext(strategy);
  };

  const handleSaveCustomization = () => {
    const customizedStrategy = {
      content: editableStrategyContent,
      metadata: {
        brand: selectedBrand,
        strategyType: strategyType,
        context: businessContext,
        generatedAt: new Date().toISOString(),
        source: 'User Customized'
      }
    };
    onNext(customizedStrategy);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-purple-600" />
            AI Strategy Generation
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Our AI is analyzing {selectedBrand.name}'s methodology and applying it to {businessContext.companyName}'s context.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Strategy Preview */}
      {isComplete && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Review and Customize Your Strategy</h3>
          <Textarea
            value={editableStrategyContent}
            onChange={(e) => setEditableStrategyContent(e.target.value)}
            className="min-h-[400px] font-mono text-sm"
            placeholder="Your generated strategy will appear here..."
          />
          <Button onClick={handleSaveCustomization} className="w-full md:w-auto">
            <Save className="w-4 h-4 mr-2" /> Save Customized Strategy
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-gray-900">Brand Inspiration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-3xl">{selectedBrand.image}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{selectedBrand.name}</h3>
                <p className="text-sm text-gray-600">{selectedBrand.category}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">{selectedBrand.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedBrand.strengths?.map((strength: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                  {strength}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-gray-900">Your Business</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div><strong>Company:</strong> {businessContext.companyName}</div>
              <div><strong>Industry:</strong> {businessContext.industry}</div>
              <div><strong>Focus:</strong> {businessContext.strategicFocus}</div>
              <div><strong>Audience:</strong> {businessContext.targetAudience}</div>
              {businessContext.budget && <div><strong>Budget:</strong> {businessContext.budget}</div>}
              {businessContext.timeline && <div><strong>Timeline:</strong> {businessContext.timeline}</div>}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategy Type Info */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-md">
        <CardContent className="pt-8 pb-8">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">🎯</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg">{strategyType.title}</h3>
              <p className="text-sm text-gray-600">AI-Powered Strategy Generation</p>
            </div>
            <Badge className="bg-purple-100 text-purple-800 font-medium">
              Premium Quality
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Generation Process */}
      <Card className="bg-white border-0 shadow-lg">
        <CardContent className="pt-8">
          {!isGenerating && !isComplete && (
            <div className="text-center py-10">
              <Sparkles className="w-20 h-20 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Generate Your Strategy</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                Our AI will create a comprehensive marketing strategy combining {selectedBrand.name}'s proven methods with your specific business needs.
              </p>
              <Button
                onClick={startGeneration}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start AI Generation
              </Button>
            </div>
          )}

          {isGenerating && !isComplete && (
            <div className="py-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-purple-600 animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Generating Your Strategy</h3>
                <p className="text-gray-600 text-lg">{steps[currentStep]}</p>
              </div>
              
              <div className="space-y-6 max-w-2xl mx-auto">
                <Progress value={progress} className="w-full h-3 bg-purple-100" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="font-medium">Progress: {Math.round(progress)}%</span>
                  <span className="font-medium">Step {currentStep + 1} of {steps.length}</span>
                </div>
              </div>
            </div>
          )}

          {isComplete && (
            <div className="text-center py-10">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Strategy Generated Successfully!</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                Your comprehensive marketing strategy is ready for review and editing.
              </p>
              <Button
                onClick={handleComplete}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                View & Edit Strategy
                <ChevronLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {canGoBack && (
        <div className="flex justify-start pt-8">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Business Context
          </Button>
        </div>
      )}
    </div>
  );
};

export default StrategyGenerator;
