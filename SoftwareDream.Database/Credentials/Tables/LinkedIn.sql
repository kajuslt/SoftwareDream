CREATE TABLE [Credentials].[LinkedIn] (
    [Id]                  INT           IDENTITY (5000000, 1) NOT NULL,
    [UserId]              INT           NULL,
    [LinkedInUserId]      VARCHAR (255) NULL,
    [LinkedInAccessToken] VARCHAR (255) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

