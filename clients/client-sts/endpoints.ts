import { RegionInfo, RegionInfoProvider } from "@aws-sdk/types";

// Partition default templates
const AWS_TEMPLATE = "sts.{region}.amazonaws.com";
const AWS_CN_TEMPLATE = "sts.{region}.amazonaws.com.cn";
const AWS_ISO_TEMPLATE = "sts.{region}.c2s.ic.gov";
const AWS_ISO_B_TEMPLATE = "sts.{region}.sc2s.sgov.gov";
const AWS_US_GOV_TEMPLATE = "sts.{region}.amazonaws.com";

// Partition regions
const AWS_REGIONS = new Set([
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-south-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "ca-central-1",
  "eu-central-1",
  "eu-north-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "me-south-1",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
]);
const AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
const AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
const AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
const AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);

export const defaultRegionInfoProvider: RegionInfoProvider = (region: string, options?: any) => {
  let regionInfo: RegionInfo | undefined = undefined;
  switch (region) {
    // First, try to match exact region names.
    case "ap-east-1":
      regionInfo = {
        hostname: "sts.ap-east-1.amazonaws.com",
      };
      break;
    case "ap-northeast-1":
      regionInfo = {
        hostname: "sts.ap-northeast-1.amazonaws.com",
      };
      break;
    case "ap-northeast-2":
      regionInfo = {
        hostname: "sts.ap-northeast-2.amazonaws.com",
      };
      break;
    case "ap-south-1":
      regionInfo = {
        hostname: "sts.ap-south-1.amazonaws.com",
      };
      break;
    case "ap-southeast-1":
      regionInfo = {
        hostname: "sts.ap-southeast-1.amazonaws.com",
      };
      break;
    case "ap-southeast-2":
      regionInfo = {
        hostname: "sts.ap-southeast-2.amazonaws.com",
      };
      break;
    case "aws-global":
      regionInfo = {
        hostname: "sts.amazonaws.com",
        signingRegion: "us-east-1",
      };
      break;
    case "ca-central-1":
      regionInfo = {
        hostname: "sts.ca-central-1.amazonaws.com",
      };
      break;
    case "cn-north-1":
      regionInfo = {
        hostname: "sts.cn-north-1.amazonaws.com.cn",
      };
      break;
    case "cn-northwest-1":
      regionInfo = {
        hostname: "sts.cn-northwest-1.amazonaws.com.cn",
      };
      break;
    case "eu-central-1":
      regionInfo = {
        hostname: "sts.eu-central-1.amazonaws.com",
      };
      break;
    case "eu-north-1":
      regionInfo = {
        hostname: "sts.eu-north-1.amazonaws.com",
      };
      break;
    case "eu-west-1":
      regionInfo = {
        hostname: "sts.eu-west-1.amazonaws.com",
      };
      break;
    case "eu-west-2":
      regionInfo = {
        hostname: "sts.eu-west-2.amazonaws.com",
      };
      break;
    case "eu-west-3":
      regionInfo = {
        hostname: "sts.eu-west-3.amazonaws.com",
      };
      break;
    case "me-south-1":
      regionInfo = {
        hostname: "sts.me-south-1.amazonaws.com",
      };
      break;
    case "sa-east-1":
      regionInfo = {
        hostname: "sts.sa-east-1.amazonaws.com",
      };
      break;
    case "us-east-1":
      regionInfo = {
        hostname: "sts.us-east-1.amazonaws.com",
      };
      break;
    case "us-east-1-fips":
      regionInfo = {
        hostname: "sts-fips.us-east-1.amazonaws.com",
        signingRegion: "us-east-1",
      };
      break;
    case "us-east-2":
      regionInfo = {
        hostname: "sts.us-east-2.amazonaws.com",
      };
      break;
    case "us-east-2-fips":
      regionInfo = {
        hostname: "sts-fips.us-east-2.amazonaws.com",
        signingRegion: "us-east-2",
      };
      break;
    case "us-gov-east-1":
      regionInfo = {
        hostname: "sts.us-gov-east-1.amazonaws.com",
      };
      break;
    case "us-gov-west-1":
      regionInfo = {
        hostname: "sts.us-gov-west-1.amazonaws.com",
      };
      break;
    case "us-iso-east-1":
      regionInfo = {
        hostname: "sts.us-iso-east-1.c2s.ic.gov",
      };
      break;
    case "us-isob-east-1":
      regionInfo = {
        hostname: "sts.us-isob-east-1.sc2s.sgov.gov",
      };
      break;
    case "us-west-1":
      regionInfo = {
        hostname: "sts.us-west-1.amazonaws.com",
      };
      break;
    case "us-west-1-fips":
      regionInfo = {
        hostname: "sts-fips.us-west-1.amazonaws.com",
        signingRegion: "us-west-1",
      };
      break;
    case "us-west-2":
      regionInfo = {
        hostname: "sts.us-west-2.amazonaws.com",
      };
      break;
    case "us-west-2-fips":
      regionInfo = {
        hostname: "sts-fips.us-west-2.amazonaws.com",
        signingRegion: "us-west-2",
      };
      break;
    // Next, try to match partition endpoints.
    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_ISO_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_ISO_B_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
        };
      }
      if (AWS_US_GOV_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
        };
      }
      // Finally, assume it's an AWS partition endpoint.
      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
        };
      }
  }
  return Promise.resolve(regionInfo);
};
