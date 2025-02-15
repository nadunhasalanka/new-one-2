import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { TrendingUp, Users, Building2 } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatCard = ({
  icon,
  value = "0",
  label = "Stat",
  color = "text-teal-500",
}: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 bg-gray-900 border-gray-800 hover:border-teal-500 transition-colors">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${color} bg-gray-800/50`}>
            {icon}
          </div>
          <div>
            <motion.h3
              className={`text-3xl font-bold ${color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {value}
            </motion.h3>
            <p className="text-gray-400">{label}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

interface StatsSectionProps {
  stats?: {
    icon: React.ReactNode;
    value: string;
    label: string;
    color: string;
  }[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const defaultStats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "488+",
      label: "Active Users",
      color: "text-teal-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "95%",
      label: "Satisfaction Rate",
      color: "text-teal-400",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "220+",
      label: "Enterprise Clients",
      color: "text-teal-300",
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="w-full py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {displayStats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
