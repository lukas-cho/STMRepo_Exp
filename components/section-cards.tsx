import {
  IconTrendingDown,
  IconTrendingUp,
  IconUsers,
  IconPackageExport,
  IconRobot,
  IconHeartDollar,
  IconRestore,
} from "@tabler/icons-react";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function SectionCards() {
  return (
    <div className="stats-grid px-4 lg:px-6">
      <Card className="financial-card">
        <CardHeader>
          <CardDescription className="text-lg font-bold text-muted-foreground">
            바자회 후원 성도
          </CardDescription>
          <CardTitle className="stat-value">
            75,840명
          </CardTitle>
          <CardAction className="flex justify-between items-center">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <IconTrendingUp className="w-4 h-4 mr-1" />
              +5.7%
            </Badge>
            <div className="p-3 bg-primary/10 rounded-full">
              <IconUsers size={32} strokeWidth={2} className="text-primary" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground">
            작년 대비 올해 5.7% 증가
            <IconTrendingUp className="size-4 text-green-600" />
          </div>
          <div className="text-muted-foreground text-xs">
            💡 AI 분석: 신규 성도와 재참여율 증가
          </div>
          <Link href="/yearly-participants" className="w-full mt-2">
            <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary transition-all">
              <ChevronRightIcon className="w-4 h-4 mr-1" />
              자세히 보기
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
      <Card className="financial-card">
        <CardHeader>
          <CardDescription className="text-lg font-bold text-muted-foreground">
            바자회 판매 건수
          </CardDescription>
          <CardTitle className="stat-value">
            20,393건
          </CardTitle>
          <CardAction className="flex justify-between items-center">
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              <IconTrendingDown className="w-4 h-4 mr-1" />
              -10%
            </Badge>
            <div className="p-3 bg-blue-100 rounded-full">
              <IconPackageExport size={32} strokeWidth={2} className="text-blue-600" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground">
            작년 대비 올해 10% 감소
            <IconTrendingDown className="size-4 text-red-600" />
          </div>
          <div className="text-muted-foreground text-xs">
            📊 AI 분석: 재료비 상승과 판매 전략 미비
          </div>
          <Link href="" className="w-full mt-2">
            <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary transition-all">
              <ChevronRightIcon className="w-4 h-4 mr-1" />
              자세히 보기
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
      <Card className="financial-card">
        <CardHeader>
          <CardDescription className="text-lg font-bold text-muted-foreground">
            최근 후원 모금액
          </CardDescription>
          <CardTitle className="stat-value">
            $105,678
          </CardTitle>
          <CardAction className="flex justify-between items-center">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <IconTrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </Badge>
            <div className="p-3 bg-green-100 rounded-full">
              <IconHeartDollar size={32} strokeWidth={2} className="text-green-600" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground">
            작년 대비 올해 12.5% 증가
            <IconTrendingUp className="size-4 text-green-600" />
          </div>
          <div className="text-muted-foreground text-xs">
            💰 AI 분석: 아이템별 책정 가격 상승
          </div>
          <Link href="/yearly-sales" className="w-full mt-2">
            <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary transition-all">
              <ChevronRightIcon className="w-4 h-4 mr-1" />
              자세히 보기
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
      <Card className="financial-card">
        <CardHeader>
          <CardDescription className="text-lg font-bold text-muted-foreground">
            재구매 건수
          </CardDescription>
          <CardTitle className="stat-value">
            5,040건
          </CardTitle>
          <CardAction className="flex justify-between items-center">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <IconTrendingUp className="w-4 h-4 mr-1" />
              +4.5%
            </Badge>
            <div className="p-3 bg-purple-100 rounded-full">
              <IconRestore size={32} strokeWidth={2} className="text-purple-600" />
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-foreground">
            아이템별 평균 재구입율
            <IconTrendingUp className="size-4 text-green-600" />
          </div>
          <div className="text-muted-foreground text-xs">
            🍜 AI 분석: 음식맛 평준화
          </div>
          <Link href="" className="w-full mt-2">
            <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary transition-all">
              <ChevronRightIcon className="w-4 h-4 mr-1" />
              자세히 보기
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
